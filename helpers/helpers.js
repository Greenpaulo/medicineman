exports.checkLengthAndSend = (res, resource) => {
  if (resource.length === 0) {
      res.status(404).json({ success: false, msg: "File not found"});
    } else {
      res.status(200).json({ success: true, data: resource });
    }
}