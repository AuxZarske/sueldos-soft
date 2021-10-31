const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      vigente_desde: Date,
      categorias: [{
        type: Schema.Types.ObjectId,
        ref: "categorias_conv",
      }],
    },
    { timestamps: true }
  );

  

  const Convenio = mongoose.model("convenio", schema);

  return Convenio;
};
