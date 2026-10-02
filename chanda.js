let contributors = [

    {
        name: "Abhijeet Gond",
        amount: 501,
        status: "Paid"
    },

    {
        name: "Akash Chauhan",
        amount: 251,
        status: "Paid"
    },

    {
        name: "Subby Chauhan",
        amount: 101,
        status: "Pending"
    },

    {
        name: "Bhawan Chauhan",
        amount: 501,
        status: "Paid"
    },

    {
        name: "Satish Chauhan",
        amount: 251,
        status: "Paid"
    },

    {
        name: "Chanadal Chauhan",
        amount: 201,
        status: "Pending"
    },

    {
        name: "Rahul Gond",
        amount: 250,
        status: "Paid"
    }

];


const contributorsGrid = document.querySelector("#contributorsGrid");
    

const searchInput = document.querySelector("#searchContributor");
    

const noResult = document.querySelector("#noResult");
   


/* =========================
   RENDER CONTRIBUTORS
========================= */

function renderContributors(data) {

    contributorsGrid.innerHTML = "";

   data.sort((a, b) => b.amount - a.amount);
    data.forEach(member => {

        const card =
            document.createElement("div");

        card.className =
            "contributor-card";


        card.innerHTML = `

            <div class="contributor-top">

                <h3 class="contributor-name">
                    ${member.name}
                </h3>

                <span class="contributor-amount">
                    ₹${member.amount}
                </span>

            </div>


            <span class="contributor-status ${
                member.status === "Paid"
                    ? "status-paid"
                    : "status-pending"
            }">

                ● ${member.status}

            </span>

        `;


        contributorsGrid.appendChild(card);

    });


    noResult.style.display =
        data.length === 0
            ? "block"
            : "none";

}


/* =========================
   UPDATE SUMMARY
========================= */

function updateSummary() {

    const total =
        contributors.reduce(
            (sum, member) =>
                sum + member.amount,
            0
        );


    const paid =
        contributors.filter(
            member =>
                member.status === "Paid"
        ).length;


    const pending =
        contributors.filter(
            member =>
                member.status === "Pending"
        ).length;


    document.querySelector("#totalAmount")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;


    document.querySelector("#totalMembers")
        .textContent =
        contributors.length;


    document.querySelector("#paidMembers")
        .textContent =
        paid;


    document.querySelector("#pendingMembers")
        .textContent =
        pending;

}


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    () => {

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        const filtered =
            contributors.filter(
                member =>
                    member.name
                        .toLowerCase()
                        .includes(searchValue)
            );


        renderContributors(filtered);

    }
);


/* =========================
   INITIAL LOAD
========================= */

renderContributors(contributors);

updateSummary();