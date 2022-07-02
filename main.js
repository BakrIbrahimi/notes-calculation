class MainObject {
  constructor(arrOfnotes, lab) {
    this.arrOfnotes = arrOfnotes;
    this.lab = lab;
    this.total = 0;
  }
  calc() {
    let endCalcNote = 0;
    let totalNotes = 0;
    for (let i of this.arrOfnotes) {
      if (i.value.length > 0) {
        totalNotes++;
        endCalcNote += +i.value;
      }
    }
    endCalcNote = endCalcNote / totalNotes;
    this.total = endCalcNote;
    endCalcNote *= this.lab;
    return endCalcNote;
  }
}

let totalLabs = 0,
  totalNotes = 0;

let notes = document.querySelectorAll(
  "td:not(:first-child) input:not(.lab-inpt)"
);
let labs = document.querySelectorAll("td:not(:first-child) div input");

let exe = document.querySelectorAll(".container table tr:not(:first-child)");

document.querySelector(".submit-btn").addEventListener("click", (_) => {
  for (let i = 0; i < exe.length; i++) {
    let ob = new MainObject(
      exe[i].querySelectorAll("td:not(:first-child) input:not(.lab-inpt)"),
      exe[i].querySelector("td:not(:first-child) div input").value
    );
    totalNotes += ob.calc();
    totalLabs += +exe[i].querySelector("td:not(:first-child) div input").value;
    exe[i].querySelector(".total").innerHTML = (ob.total).toFixed(2);
  }
  document.querySelector("h1.finalNote").innerHTML = `معدل الدورة : ${(
    totalNotes / totalLabs
  ).toFixed(2)}`;
  totalLabs = 0;
  totalNotes = 0;
});
