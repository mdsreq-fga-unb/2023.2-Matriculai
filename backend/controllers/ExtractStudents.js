const exceljs = require('exceljs');
const user = require('./UserControllers') 

exports.extractStudents = async (req, res) => {
  const file_input = req.file;

  const workbook = new exceljs.Workbook();
  try {
    await workbook.xlsx.load(file_input.buffer);
    const spreadsheet = workbook.worksheets[0];

    const columns = spreadsheet.getRow(1).values;

    const data = [];

    for (let rowIndex = 2; rowIndex <= spreadsheet.rowCount; rowIndex++) {
      const row = spreadsheet.getRow(rowIndex);
      const dataRow = {}; 
      columns.forEach((columnName, columnIndex) => {
        dataRow[columnName] = row.getCell(columnIndex).value;
      });
      data.push(dataRow);
    }

    data.forEach( async (student) => {
      try{
        await user.studentRegister(student)
      }
      catch(err){
        console.log(err)
      }
    });
    
    res.json({ mensagem: 'Arquivo Excel recebido e processado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao processar arquivo Excel:', erro);
    res.status(500).json({ erro: 'Erro ao processar arquivo Excel.' });
  }
};
