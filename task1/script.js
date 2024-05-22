document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    // random color generator 
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    // partition creation 
    function createPartition(parent, direction) {
        const oldColor = parent.style.backgroundColor;
        const newColor = getRandomColor();
        const partition1 = document.createElement("div");
        const partition2 = document.createElement("div");

        partition1.classList.add("partition");
        partition2.classList.add("partition");
        partition1.style.backgroundColor = oldColor;
        partition2.style.backgroundColor = newColor;

        const controls1 = createControls();
        const controls2 = createControls();

        partition1.appendChild(controls1);
        partition2.appendChild(controls2);

        if (direction === "vertical") {
            parent.style.flexDirection = "row";
            partition1.style.width = "50%";
            partition2.style.width = "50%";
            partition1.style.height = "100%";
            partition2.style.height = "100%";
        } else if (direction === "horizontal") {
            parent.style.flexDirection = "column";
            partition1.style.width = "100%";
            partition2.style.width = "100%";
            partition1.style.height = "50%";
            partition2.style.height = "50%";
        }

        parent.innerHTML = "";
        parent.appendChild(partition1);
        parent.appendChild(partition2);

        addControls(partition1);
        addControls(partition2);
    }

    // controllers
    function createControls() {
        const controls = document.createElement("div");
        controls.classList.add("controls");
        controls.innerHTML = '<button class="split-v">V</button><button class="split-h">H</button><button class="remove">-</button>';
        return controls;
    }

    function addControls(partition) {
        const splitVButton = partition.querySelector(".split-v");
        const splitHButton = partition.querySelector(".split-h");
        const removeButton = partition.querySelector(".remove");

        splitVButton.addEventListener("click", () => createPartition(partition, "vertical"));
        splitHButton.addEventListener("click", () => createPartition(partition, "horizontal"));
        removeButton.addEventListener("click", () => partition.remove());

        makeResizable(partition);
    }

    // resize 
    function makeResizable(partition) {
        partition.classList.add("resizable");
    }

    addControls(container);
});
