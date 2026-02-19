export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { file_url } = req.body || {};

    if (!file_url) {
      return res.status(400).json({ error: "file_url missing" });
    }

    return res.status(200).json({
      extraction_quality: {
        overall_confidence: 0,
        lines_total: 0,
        lines_parsed: 0,
        lines_rejected: 0,
        unparsed_samples: [],
        warnings: ["mvp_stub"]
      },
      labs: []
    });

  } catch (err) {
    return res.status(500).json({ error: "internal error" });
  }
}
