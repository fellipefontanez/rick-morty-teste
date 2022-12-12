import style from './index.module.css';

const Tabela = ({data, colunas}) => {
    return(
        <table className={style.tabela} cellPadding='0' cellSpacing='0'>
            <thead className={style.thead}>
                <tr>
                    {colunas.map((col)=> (
                        <th key={col} className={style.celula}>
                            {col}
                        </th>))
                    }
                </tr>
            </thead>
            <tbody>
                {data.map((personagem, i) => (
                  <tr key={i}>
                    {colunas.map((coluna)=> (
                        <td key={`${coluna}-${personagem}`} className={style.celula}>
                            {personagem[coluna]}
                        </td>
                    ))}
                  </tr>  
                ))}
            </tbody>
        </table>
    )
}
export default Tabela;