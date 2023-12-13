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

      const matricula = row.getCell(1).value;
      const nomeCompleto = row.getCell(2).value;
      const ano = row.getCell(3).value;
      const email = row.getCell(4).value;
      
      console.log(nomeCompleto.toString().length)
      console.log((nomeCompleto.toString().length > 10 || nomeCompleto.toString().length < 50))
      console.log((parseInt(ano) > 1 || parseInt(ano) <= 3))
      console.log(( matricula.toString().length > 0 &&  matricula.toString().length <= 8))


      if((nomeCompleto.toString().length > 10 || nomeCompleto.toString().length < 50) && (parseInt(ano) > 1 || parseInt(ano) <= 3) && ( matricula.toString().length > 0 &&  matricula.toString().length <= 8)){
        columns.forEach((columnName, columnIndex) => {
          dataRow[columnName] = row.getCell(columnIndex).value;
        });
        data.push(dataRow);
      }else{
        return res.status(400).json({ erro: 'Dados inválidos na linha ' + rowIndex });
      }
    }

    data.forEach( async (student) => {
      try{
        await user.studentRegister(student)
      }
      catch(err){
        console.log(err)
      }
    });
    
    res.status(201).json({ mensagem: 'Arquivo Excel recebido e processado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao processar arquivo Excel:', erro);
    res.status(500).json({ erro: 'Erro ao processar arquivo Excel.' });
  }
};
