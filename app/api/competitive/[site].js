export default function handler(req, res) {
  const { site } = req.query;
  if (site === "codeforces") {
    fetch(
      "https://clist.by/account/glennmendonca/resource/codeforces.com/ratings/?resource=codeforces.com",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Host: "clist.by",
        },
      }
    )
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          error: error,
        });
      });
  } else if (site === "codechef") {
    fetch(
      "https://clist.by/account/glen17/resource/codechef.com/ratings/?resource=codechef.com",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Host: "clist.by",
        },
      }
    )
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          error: error,
        });
      });
  } else if (site === "leetcode") {
    fetch(
      "https://clist.by/account/glen17/resource/leetcode.com/ratings/?resource=leetcode.com",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Host: "clist.by",
        },
      }
    )
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          error: error,
        });
      });
  } else {
    res.status(404).json({
      error: "Invalid site",
    });
  }
}
