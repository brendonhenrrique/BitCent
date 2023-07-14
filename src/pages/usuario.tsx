import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/TituloPagina";
import Id from "@/logic/core/comum/Id";
import { IconForms } from "@tabler/icons-react";
import usuario from "@/data/constants/usuarioFalso";
import Formularios from "@/components/usuario/Formularios";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function CadastroUsuario(){
    const { usuario } = useContext(AutenticacaoContext)
    return (
        <Pagina>
            <Cabecalho/>
            <Conteudo> 
                <TituloPagina 
                    icone={<IconForms />}
                    principal="Dados Cadastrais"    
                    secundario={`Informações de ${usuario?.email}`}
                />
                <Formularios />
            </Conteudo>
        </Pagina>
    )
}