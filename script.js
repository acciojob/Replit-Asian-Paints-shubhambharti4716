//your JS code here. If required.
const blockIdInput = document.getElementById("block_id");
  const colorInput = document.getElementById("colour_id");
  const changeButton = document.getElementById("change_button");
  const resetButton = document.getElementById("reset_button");
  const gridItems = document.querySelectorAll(".grid-item");



  changeButton.addEventListener("click", function () {

    console.log("Click")
      const blockId = blockIdInput.value;
      const color = colorInput.value;



      gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
      });

      const selectedBlock = document.getElementById(blockId);
     // reference variable for changes
	  if (selectedBlock) {
          selectedBlock.style.backgroundColor =  color;
      } else {
          alert("Block ID not found!");
      }
  });

  resetButton.addEventListener("click", function () {
      gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
      });
  });