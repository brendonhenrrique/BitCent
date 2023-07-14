import Usuario from "@/logic/core/Usuario";
import Id from "@/logic/core/comum/Id";

export default{
    id: Id.novo(),
    nome: '',
    email: '',
    imagemUrl: null
} as Usuario