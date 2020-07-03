const express = require("express");
const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  // GET Requests

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "Public/notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "Public/index.html"));
  });
};
