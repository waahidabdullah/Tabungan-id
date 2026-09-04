function doPost(e) {
  // Aktifkan akses lintas domain (CORS) agar GitHub bisa mengirim data
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var sheet = SpreadsheetApp.openById("ISI_DENGAN_ID_SPREADSHEET_ANDA").getSheetByName("Form responses 1");
    var data = JSON.parse(e.postData.contents);
    
    var barisBaru = [
      "", 
      data.nama_nasabah,  
      data.tanggal,       
      data.nominal,       
      data.keterangan     
    ];
    sheet.appendRow(barisBaru);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "sukses"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "gagal", "error": error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
