const Watch = require("../models/watch");

exports.getWatch = (req, res, next) => {
  Watch.findById(req.params.id)
    .then(watch => {
      if (watch) {
        res.status(200).json(watch);
      } else {
        res.status(404).json({ message: "Watch not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Fetching watch Failed!" });
    });
}

exports.getWatches = (req, res, next) => {
  if (req.query.search) {
    console.log(req.query.search);
    const watchesQuery = Watch.find({ $text: { $search: req.query.search } }).sort('-_id');
    watchesQuery
    .then(data => {
      res.status(201).json({
        message: "Watches fetched successfully",
        watches: data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Fetching watches failed!"
      });
    });
  } else if (req.query.filter) {
    const queryStrings = req.query.filter.split(' ');
    const watchesQuery = Watch.find({ "info.brand": { $in: queryStrings } }).sort('-_id');
    watchesQuery
    .then(data => {
      res.status(201).json({
        message: "Watches filtered successfully",
        watches: data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Filtering watches failed!"
      });
    });
  } else {
    const watchesQuery = Watch.find().sort('-_id');
    watchesQuery
      .then(data => {
        res.status(201).json({
          message: "Watches fetched successfully",
          watches: data
        })
      })
      .catch(err => {
        res.status(500).json({
          message: "Fetching watches failed!"
        });
      });
  }
  
}

exports.getBrands = (req, res, next) => {
  let names = Watch.find().distinct('info.brand');
  names
    .then(data => {
      console.log(data);
      res.status(201).json({
        message: "Brands fetched successfully",
        brands: data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Fetching brands failed!"
      });
    });
}

exports.createWatch = (req, res, next) => {
  // const url = req.protocol + "://" + req.get("host");
  console.log(req.body);
  const watch = new Watch({
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    info: {
      listingNumber: req.body.info.listingNumber,
      referenceNumber: req.body.info.referenceNumber,
      model: req.body.info.model,
      brand: req.body.info.brand,
      year: req.body.info.year,
      gender: req.body.info.gender,
    },
    calibre: {
      powerReserve: req.body.calibre.powerReserve,
      movement: req.body.calibre.movement,
      movementPerCalibre: req.body.calibre.movementPerCalibre,
    },
    case: {
      material: req.body.case.material,
      diameter: req.body.case.diameter,
      glass: req.body.case.glass,
    },
    strap: {
      material: req.body.strap.material,
      braceletColor: req.body.strap.braceletColor,
    }
  });
  watch
    .save()
    .then(createdWatch => {
      console.log('ceasul', createdWatch);
      res.status(201).json({
        message: 'Watch added successfully!',
        watch: {
          ...createdWatch,
          id: createdWatch._id
        }
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Adding a new watch failed...'
      })
    })
}

exports.updateWatch = (req, res, next) => {

}

exports.deleteWatch = (req, res, next) => {

}