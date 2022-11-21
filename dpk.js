const crypto = require("crypto");



function createHash(data){
  const hash = crypto.createHash("sha3-512").update(data).digest("hex");
  return hash;
}

exports.deterministicPartitionKey = (event) => {
  let partitionKey = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (typeof event == "object" && event){
    const eventPartionKey = event.partitionKey;
    if (eventPartionKey) {
      partitionKey = eventPartionKey.length > MAX_PARTITION_KEY_LENGTH ? createHash(eventPartionKey) : "" + eventPartionKey;   
    }else {
        const eventKey = JSON.stringify(event);
        partitionKey = createHash(eventKey);
    }
  }
  return partitionKey;
};