function distanceFromHqInBlocks(distance, hqDistance){
    return Math.abs(distance - hqDistance);
  }
  console.log(distanceFromHqInBlocks(42, 34));
  console.log(distanceFromHqInBlocks(50, 42));
  console.log(distanceFromHqInBlocks(42, 34));
  
  function distanceFromHqInBlocks(numberOfBlocksA, numberOfBlocksB){
    const distanceInBlocks = Math.abs(numberOfBlocksA - numberOfBlocksB);
    const  distanceInFeet= distanceInBlocks * 264;
    return 'distanceInFeet';
  }
  console.log(distanceFromHqInBlocks(34, 38));
  console.log(distanceFromHqInBlocks(43, 48));
  console.log(distanceFromHqInBlocks(42, 43));
  console.log(distanceFromHqInBlocks(50, 42));
  console.log(distanceFromHqInBlocks(42, 34));
  console.log(distanceFromHqInBlocks(50, 60));
  console.log(distanceFromHqInBlocks(34, 28));
  return (distanceInFeet);

  function calculateFare(distance) {
    if (distance <= 400) {
      return 'The ride is free';
    } else if (distance <= 2000) {
      return (distance - 400) * 0.025;
    } else if (distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  function calculateAndCheck(distance) {
    const fare = calculateFare(distance);
  
    if (fare !== 'cannot travel that far') {
      return fare;
    } else {
      return 'cannot travel that far';
    }
  }
  
  const distance = 200;
  const fare = calculateAndCheck(distance);
  console.log(fare);

  