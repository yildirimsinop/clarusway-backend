"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const middleFunction1 = (req, res, next) => {
  // console.log( req.query )
  const skip = req.query.skip ?? false;

  req.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  if (skip) {
    // Bir sonraki bağımsız fonksiyona git:
    console.log("next-route çalıştı");
    next("route");
  } else {
    // Bir sonraki callback fonksiyona git:
    console.log("next çalıştı");
    next();
  }
};

const middleFunction2 = (req, res, next) => {
  // next()

  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Here is func2, next() runned",
  });
};

module.exports = [middleFunction1, middleFunction2];
