const exceljs = require('exceljs');

exports.extractStudents = async (req, res) => {
  const arquivo = req.file;

  const workbook = new exceljs.Workbook();
  try {
    await workbook.xlsx.load(arquivo.buffer);
    const primeiraPlanilha = workbook.worksheets[0];

    const nomesColunas = primeiraPlanilha.getRow(1).values;

    const dados = [];

    for (let rowIndex = 2; rowIndex <= primeiraPlanilha.rowCount; rowIndex++) {
      const linha = primeiraPlanilha.getRow(rowIndex);
      const dadosLinha = {};
      nomesColunas.forEach((nomeColuna, columnIndex) => {
        dadosLinha[nomeColuna] = linha.getCell(columnIndex + 1).value;
      });
      dados.push(dadosLinha);
    }


    console.log('Dados extraídos:', dados);

    res.json({ mensagem: 'Arquivo Excel recebido e processado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao processar arquivo Excel:', erro);
    res.status(500).json({ erro: 'Erro ao processar arquivo Excel.' });
  }
};
