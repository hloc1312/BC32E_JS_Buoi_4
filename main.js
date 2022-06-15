/**
 * Bài 1: Xuất 3 số theo thứ tự tăng dần
 * - Input: soThu1: number, soThu2: number, soThu3: number
 *
 * - Output: ketQua: string
 */

document.getElementById("btnSapXep").onclick = function () {
  // input
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  //   output ketQua: string
  var ketQua = "";

  //   progress
  if (soThu1 > soThu2) {
    if (soThu2 > soThu3) {
      ketQua = soThu3 + "< " + soThu2 + "< " + soThu1;
    } else if (soThu1 > soThu3) {
      ketQua = soThu2 + "< " + soThu3 + "< " + soThu1;
    } else {
      ketQua = soThu2 + "< " + soThu1 + "< " + soThu3;
    }
  } else {
    if (soThu1 > soThu3) {
      ketQua = soThu3 + "< " + soThu1 + "< " + soThu2;
    } else if (soThu2 > soThu3) {
      ketQua = soThu1 + "< " + soThu3 + "< " + soThu2;
    } else {
      ketQua = soThu1 + "< " + soThu2 + "< " + soThu3;
    }
  }

  //   output in ra giao diện
  document.getElementById("baiTap1").innerHTML = ketQua;
};

/**
 * Bài 2: Chương trình "Chào hỏi"
 */
document.getElementById("btnLoiChao").onclick = function () {
  // input: thanhVien: string
  var thanhVien = document.getElementById("selectMember").value;

  // output loiChao: string;
  var loiChao = "";

  // progress
  switch (thanhVien) {
    case "Bo":
      loiChao = "Xin chào Bố";
      break;
    case "Me":
      loiChao = "Xin chào Mẹ";
      break;
    case "AnhTrai":
      loiChao = "Xin chào Anh Trai";
      break;
    case "EmGai":
      loiChao = "Xin chào Em Gái";
      break;
    default:
      loiChao = "Xin chào Người lạ ơi!";
  }

  // Xuất ra màn hình
  document.getElementById("baiTap2").innerHTML = loiChao;
};

// Bài 3: Đếm số chẵn lẻ
document.getElementById("btnDem").onclick = function () {
  // input soThuNhat: number, soThuHai: number, soThuBa: numbre
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);

  // output count: number, soLe: number

  var count = 0;
  var soLe = 0;

  // progress
  if (soThuNhat % 2 === 0) {
    count++;
  }
  if (soThuHai % 2 === 0) {
    count++;
  }
  if (soThuBa % 2 === 0) {
    count++;
  }
  soLe = 3 - count;

  // output in ra màn hình
  document.getElementById("baiTap3").innerHTML =
    "Có " + count + " số chẳn " + " - " + soLe + " số lẻ";
};

// Bài 4: Đoán hình tam giác

document.getElementById("btnDuDoan").onclick = function () {
  // input canhA: number, canhB: number, canhC:number
  var canhA = Number(document.getElementById("canhA").value);
  var canhB = Number(document.getElementById("canhB").value);
  var canhC = Number(document.getElementById("canhC").value);

  // output loaiTamGiac: string
  var loaiTamGiac = "";

  // progress
  if (canhA === canhB && canhA === canhC && canhB === canhC) {
    loaiTamGiac = "Hình tam giác đều";
  } else if (canhA === canhB || canhA === canhC || canhB === canhC) {
    loaiTamGiac = "Hình tam giác cân";
  } else if (Math.pow(canhC, 2) === Math.pow(canhA, 2) + Math.pow(canhB, 2)) {
    loaiTamGiac = "Hình tam giác vuông";
  } else {
    loaiTamGiac = "Một loại tam giác nào đó";
  }

  // output in màn hình
  document.getElementById("ketQuaB4").innerHTML = loaiTamGiac;
};

// Bài 5: Tính ngày tháng năm

// Ngày hôm qua
document.getElementById("btnNgayHomQua").onclick = function () {
  // input ngay: number, thang: number, nam: number
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  // output ngayHomqua: string
  var ngayHomqua = "";
  // progress
  if (ngay === 1 && thang === 1) {
    ngay = 31;
    thang = 12;
    nam -= 1;
    ngayHomqua = ngay + "/" + thang + "/" + nam;
  } else if (ngay < 1 || ngay > 31 || (ngay > 28 && thang === 2)) {
    ngayHomqua = "Ngày không xác định";
  } else if (thang < 1 || thang > 12) {
    ngayHomqua = "Tháng không xác định";
  } else {
    ngay -= 1;
    ngayHomqua = ngay + "/" + thang + "/" + nam;
  }

  // output in ra màn hình giao diện
  document.getElementById("ketQuaB5").innerHTML = ngayHomqua;
};

// Ngày mai
document.getElementById("btnNgayMai").onclick = function () {
  // input ngay: number, thang: number, nam: number
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  // output ngayMai: string
  var ngayMai = "";
  // progress
  if (ngay === 31 && thang === 12) {
    ngay = 1;
    thang = 1;
    nam += 1;
    ngayMai = ngay + "/" + thang + "/" + nam;
  } else if (ngay === 28 && thang === 2) {
    ngay = 1;
    thang += 1;
    ngayMai = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 30 &&
    (thang === 4 || thang === 6 || thang === 9 || thang === 11)
  ) {
    ngay = 1;
    thang += 1;
    ngayMai = ngay + "/" + thang + "/" + nam;
  } else if (
    ngay === 31 &&
    (thang === 1 ||
      thang === 3 ||
      thang === 5 ||
      thang === 7 ||
      thang === 8 ||
      thang === 10 ||
      thang === 12)
  ) {
    ngay = 1;
    thang += 1;
    ngayMai = ngay + "/" + thang + "/" + nam;
  } else if (ngay < 1 || ngay > 31 || (ngay > 28 && thang === 2)) {
    ngayMai = "Ngày không xác định";
  } else if (thang < 1 || thang > 12) {
    ngayMai = "Tháng không xác định";
  } else {
    ngay += 1;
    ngayMai = ngay + "/" + thang + "/" + nam;
  }

  // output in ra màn hình giao diện
  document.getElementById("ketQuaB5").innerHTML = ngayMai;
};

// Bài 6: Tính ngày
document.getElementById("btnTinhNngay").onclick = function () {
  // input thang:number, nam: number
  var thang = Number(document.getElementById("thang_b6").value);
  var nam = Number(document.getElementById("nam_b6").value);
  // output ngay: string
  var ngay = "";
  // progress
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 30 ngày";
      break;
    case 2:
      if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
        ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 29 ngày";
        break;
      } else {
        ngay = "Tháng: " + thang + " - Năm: " + nam + " - Có: 28 ngày";
        break;
      }
    default:
      ngay = "Tháng: " + thang + " - Năm: " + nam + " Không xác định";
  }

  // output in ra giao diện
  document.getElementById("ketQuaB6").innerHTML = ngay;
};

// Bài 7: Đọc số
document.getElementById("btnDocSo").onclick = function () {
  // input soTuNhien: number
  var soTuNhien = Number(document.getElementById("soTuNhien").value);
  // output docSo: string, soHangTram: number, soHangChuc: number, soHangDonVi: number
  var docSo = "";
  var soHangTram = 0;
  var soHangChuc = 0;
  var soHangDonVi = 0;
  // progress
  soHangTram = Math.floor(soTuNhien / 100);
  soHangChuc = Math.floor((soTuNhien % 100) / 10);
  soHangDonVi = Math.floor((soTuNhien % 100) % 10);
  if (soTuNhien > 99 && soTuNhien <= 999) {
    switch (soHangTram) {
      case 1:
        docSo = "Một trăm ";
        break;
      case 2:
        docSo = "Hai trăm ";
        break;
      case 3:
        docSo = "Ba trăm ";
        break;
      case 4:
        docSo = "Bốn trăm ";
        break;
      case 5:
        docSo = "Năm trăm ";
        break;
      case 6:
        docSo = "Sáu trăm ";
        break;
      case 7:
        docSo = "Bảy trăm ";
        break;
      case 8:
        docSo = "Tám trăm ";
        break;
      case 9:
        docSo = "Chín trăm ";
        break;
    }
    switch (soHangChuc) {
      case 1:
        docSo += "mười ";
        break;
      case 2:
        docSo += "hai mươi ";
        break;
      case 3:
        docSo += "ba mươi ";
        break;
      case 4:
        docSo += "bốn mươi ";
        break;
      case 5:
        docSo += "năm mươi ";
        break;
      case 6:
        docSo += "sáu mươi ";
        break;
      case 7:
        docSo += "bảy mươi ";
        break;
      case 8:
        docSo += "tám mươi ";
        break;
      case 9:
        docSo += "chín mươi ";
        break;
    }
    switch (soHangDonVi) {
      case 1:
        docSo += "một";
        break;
      case 2:
        docSo += "hai";
        break;
      case 3:
        docSo += "ba";
        break;
      case 4:
        docSo += "bốn";
        break;
      case 5:
        docSo += "năm";
        break;
      case 6:
        docSo += "sáu";
        break;
      case 7:
        docSo += "bảy";
        break;
      case 8:
        docSo += "tám";
        break;
      case 9:
        docSo += "chín";
        break;
    }
  } else {
    docSo = "Hãy nhập số tự nhiên có 3 chữ số";
  }
  // output ras giao diện
  document.getElementById("ketQuaB7").innerHTML = docSo;
};

// Bài 8: Tìm sinh viên xa trường nhất
document.getElementById("btnTim").onclick = function () {
  // input
  /*
    + tenSinhVien1: string, toaDoDiemX1: number, toaDoDiemY1: number
    + tenSinhVien2: string, toaDoDiemX2: number, toaDoDiemY2: number
    + tenSinhVien3: string, toaDoDiemX3: number, toaDoDiemY3: number
    + toaDoDiemX: number, toaDoDiemY: number
    + doDaiSV1: number, doDaiSV2: number, doDaiSV3: number
  */
  var tenSinhVien1 = document.getElementById("tenSinhVien1").value;
  var toaDoDiemX1 = Number(document.getElementById("toaDoDiemX1").value);
  var toaDoDiemY1 = Number(document.getElementById("toaDoDiemY1").value);
  var tenSinhVien2 = document.getElementById("tenSinhVien2").value;
  var toaDoDiemX2 = Number(document.getElementById("toaDoDiemX2").value);
  var toaDoDiemY2 = Number(document.getElementById("toaDoDiemY2").value);
  var tenSinhVien3 = document.getElementById("tenSinhVien3").value;
  var toaDoDiemX3 = Number(document.getElementById("toaDoDiemX3").value);
  var toaDoDiemY3 = Number(document.getElementById("toaDoDiemY3").value);
  var toaDoDiemX = Number(document.getElementById("toaDoDiemX").value);
  var toaDoDiemY = Number(document.getElementById("toaDoDiemY").value);
  var doDaiSV1 = 0;
  var doDaiSV2 = 0;
  var doDaiSV3 = 0;

  // output aiXaNhat: string
  var aiXaNhat = "";

  // progress
  doDaiSV1 = Math.sqrt(
    Math.pow(toaDoDiemX1 - toaDoDiemX, 2) +
      Math.pow(toaDoDiemY1 - toaDoDiemY, 2)
  );
  doDaiSV2 = Math.sqrt(
    Math.pow(toaDoDiemX2 - toaDoDiemX, 2) +
      Math.pow(toaDoDiemY2 - toaDoDiemY, 2)
  );
  doDaiSV3 = Math.sqrt(
    Math.pow(toaDoDiemX3 - toaDoDiemX, 2) +
      Math.pow(toaDoDiemY3 - toaDoDiemY, 2)
  );

  if (doDaiSV1 > doDaiSV2 && doDaiSV1 > doDaiSV3) {
    aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien1;
  } else if (doDaiSV2 > doDaiSV1 && doDaiSV2 > doDaiSV3) {
    aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien2;
  } else {
    aiXaNhat = "Sinh viên xa trường nhất: " + tenSinhVien3;
  }
  // output in ra màn hình giao diện
  document.getElementById("ketQuaB8").innerHTML = aiXaNhat;
};
