import pool from "../database/data";


const cadastrar = async (veiculo) => {
    const { nome, marca, ano, preco, descricao } = veiculo;
    const query = 'INSERT INTO veiculos (nome, marca, ano, preco, descricao) VALUES (?, ?, ?, ?, ?)';
    const [result] = await pool.query(query, [nome, marca, ano, preco, descricao]);
    return result.insertId;
}