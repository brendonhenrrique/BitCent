import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Listas";
import { useContext, useState } from "react";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado"
import Id from "@/logic/core/comum/Id";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import servicos from "@/logic/core";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";
import Grade from "./Grade";

export default function Financas(){
   const {
    data, alterarData,
    TipoExibicao, alterarExibicao,
    transacoes, transacao, selecionar, salvar, excluir
} = useTransacao()

    function renderizarControles(){
        return(
            <div className="flex justify-between">
                    <CampoMesAno 
                        data={data}
                        dataMudou={alterarData}
                    />
                    <div className="flex gap-5">
                        <Button
                            className="bg-blue-500"
                            leftIcon={<IconPlus/>}
                            onClick={() => selecionar(transacaoVazia)}
                            >Nova Transação</Button>
                            <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
                    />
                    </div>
                </div>

        )
    }

    function renderizarTransacoes(){
        const props ={transacoes, selecionarTransacao: selecionar}
        return TipoExibicao === 'lista' ? <Lista {...props}/> : <Grade {...props}/>        
    }

    return(
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                {renderizarControles()}
                {transacao ? (
                    <Formulario 
                    transacao={transacao} 
                    salvar={salvar}
                    excluir={excluir}
                    cancelar={() =>selecionar(null)}
                    />
                    ): transacoes.length ?(
                        renderizarTransacoes()
                    ): (
                        <NaoEncontrado>
                            Nenhuma Transação encontrada
                        </NaoEncontrado>
                    )}
            </Conteudo>
        </Pagina>
    )
}