function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Nome completo', 'WhatsApp', 'Tamanho', 'Data/Hora']);
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.nome || '',
      data.whatsapp || '',
      data.tamanho || '',
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
