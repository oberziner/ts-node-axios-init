import axios from "axios"


async function main() {
  console.log("Hello!")
  const response = await axios.get("https://status.digitalocean.com/api/v2/summary.json")
  console.log(response.data.page)
}

main()
  .then(() => {
    console.log("DONE");
  })
  .catch(err => {
    console.log("ERROR:", err.status, err.message, err.response.data);
  });
