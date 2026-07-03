// ATENÇÃO: FORM_SECRET precisa ser IGUAL ao valor da constante FORM_SECRET
// definida no index.html (no <script> do formulário). É só um filtro
// simples contra bots automatizados batendo nessa URL pública — não é
// segurança forte. Gere um código aleatório e cole o MESMO valor nos dois
// lugares (apps-script.gs e index.html) antes de publicar.
var FORM_SECRET = 'TROCAR_POR_UM_CODIGO_SECRETO';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.secret !== FORM_SECRET) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'não autorizado' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Nome completo', 'WhatsApp', 'Tamanho', 'Data/Hora']);
    }

    sheet.appendRow([
      data.nome || '',
      data.whatsapp || '',
      data.tamanho || '',
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
