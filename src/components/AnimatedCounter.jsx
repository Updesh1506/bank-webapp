
import { animatedCounter } from '@/props/componentProps';
import CountUp from 'react-countup';  // Make sure to import CountUp

const AnimatedCounter = ({ amount }) => {
  return (
    <div className='w-full'>
      <CountUp 
      decimals={3}
      decimal=','
      prefix='Rs.'
      end={amount} />
    </div>
  );
}

AnimatedCounter.propTypes = animatedCounter

export default AnimatedCounter;
