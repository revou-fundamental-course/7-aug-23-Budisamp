function calculate() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
      alert("Masukkan angka  untuk panjang alas dan tinggi.");
      return;
    }

    var area = (base * height) / 2;
    var hypotenuse = Math.sqrt(base * base + height * height);
    var perimeter = base + height + hypotenuse;

    document.getElementById("resultArea").textContent = area.toFixed(2);
    document.getElementById("resultPerimeter").textContent = perimeter.toFixed(2);
  }

  function calculatea() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert("Masukkan angka untuk panjang sisi-sisi segitiga.");
      return;
    }

    var perimeter = sideA + sideB + sideC;

    document.getElementById("resultPerimeter2").textContent = perimeter.toFixed(2);
  }