"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp decimals={2} decimal="," prefix="£" duration={2} end={amount} />
    </div>
  );
};

export default AnimatedCounter;
