const btnFilter = document.querySelectorAll(".btn-filter");
const portfolioBox = document.querySelectorAll(".box-filter-porto");

// Mebuat btn class jadi active
btnFilter.forEach((btn) => {
  btn.onclick = () => {
    btnFilter.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    // End clas active

    let dataFilter = btn.getAttribute("data-filter");

    portfolioBox.forEach((box) => {
      box.classList.add("hide");
      box.classList.remove("active");

      let dataItem = box.getAttribute("data-item");

      if (dataFilter == dataItem || dataFilter == "all") {
        box.classList.add("active");
        box.classList.remove("hide");
      }
    });
  };
});
