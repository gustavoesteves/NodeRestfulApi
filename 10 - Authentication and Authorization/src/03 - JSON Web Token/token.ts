import * as jwt from "jsonwebtoken";

export async function token(email: string): Promise<string> {
    return await jwt.sign({ email: email }, 'jwtChavinhaPrivadaQueNaoDeveSerUsadaAquiNoCodigoMasNasVariaveisDeSistema');
}