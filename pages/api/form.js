export default function handler(req, res) {
  const body = req.body;

//   console.log("body: ",body);

  if (!body.name || !body.email || !body.companyName || !body.description) {
    res.status(400).json({ data: "name or email not found" });
  }

  res.status(200).json({
    data: `${body.name}, ${body.email}, ${body.companyName}, ${body.description}`,
  });
}
