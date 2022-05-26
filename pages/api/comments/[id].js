import comments from "../../../comments.json"

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
        case "POST":
            res.status(200).json({post: req.query.id, comments});
            break;
        default:
            res.status(405).end();
            break;
    }
}
