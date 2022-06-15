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
