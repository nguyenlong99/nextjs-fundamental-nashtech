// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  backgroundImage: string;
  title: string;
  subTitle: string;
  content: string;
};

const data = [
  {
    id: '1',
    title: 'How To Raise An Empathetic Child In A World Devoid Of Kindness',
    subTitle: 'my first blog post',
    backgroundImage: '/img/post-bg.jpg',
    content:
      '<p>The world as we know it is changing. As technological advances and globalization are making us more connected than ever, in our hearts, we are more dissociated than ever. Social media bubbles, polarization, and the growing hatred around us are only making us more exhausted and lonelier.</p> <p>And you who are affected the most?</p> <p>Our kids.</p> <p>Growing up in a post-pandemic world that is obsessed with social media, artificial intelligence, and personal sentiments, it is a difficult time for kids to learn the core values of empathy and kindness. </p> <p>If, as a parent, you have wondered how to raise an empathetic child in a world that is so devoid of similar values, you are not alone. Creating a compassionate culture is more complex yet more critical than ever. </p> <p>As a child’s first-ever role model, parents play a critical role in helping their kids develop social values, including empathy. Empathy is a person’s ability to understand the emotions, experiences, and perspectives of others. </p><p>It is broadly divided into two types – cognitive and emotional empathy. Emotional empathy is the ability to feel someone else’s emotions, like feeling sad when your best friend’s behalf when they are hurt. Cognitive empathy, on the other hand, is the ability to understand someone’s emotions, like noticing how someone is uncomfortable in a particular situation. </p><p>Humans have an inherent capacity for empathy. However, the skill needs guidance from parents and social surroundings in order to develop fully.</p><p>On that note, here are five effective tips on how to raise an empathetic child. </p><h2 class=`section-heading`>Practical Tips On How To Raise An Empathetic Child?</h2><h3 class=`section-heading`>1. Talk To Your Child About Your Feelings.</h3><p>Children, especially younger ones, feel countless emotions daily. However, since they haven’t evolved their vocabulary as such, they can’t name most of their feelings. Therefore, naming your emotions with them will help them develop the required emotional intelligence and self-awareness required to practice empathy. </p><p>As a parent, you can do this in your everyday life. For starters, start acknowledging your emotions with your child, like, “This traffic is making me feel stressed,” or “This movie makes me feel happy,” etc. </p><h3 class=`section-heading`>2. Let Them Spend Time With More People.</h3><p>Children learn a lot from their external surroundings. This fact is significant when it comes to understanding how to raise an empathetic child. </p><p>As per research by <i>Grit Hein and team</i>, people learn a lot more empathy and compassion in the company of new people. Therefore, having positive social interactions and experiences as a child can go a long way in developing empathy in your child.  </p><h3 class=`section-heading`>3. Help Your Kids Develop Their Moral Compass At An Early Age.</h3><p>Another one of the most effective tips on how to raise an empathetic child is to help your kids develop a moral compass at an early age. </p><p>This is because while we all teach our kids to ‘behave nicely’ or ‘be kind,’ we seldom tell them the reason behind it. So while you might teach your children about empathy, in order to sustain those values, you need to help them understand why empathy is so important. Rather than telling them to just ‘be kind to your friend,’ you need to explain why they must always choose to act this way.</p><p>To develop empathy as a life-long value, helping your child develop a moral identity and the ability to differentiate between right and wrong is essential.</p>',
  },
  {
    id: '2',
    backgroundImage: '/img/post-bg.jpg',
    title: 'My First Blog Post',
    subTitle: 'my first blog post',
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ipsum eu urna dignissim, sed facilisis ex varius. Mauris aliquet nibh vel nisl interdum lacinia. Nullam mattis cursus lorem, a aliquam nisl congue sit amet. Nulla non tempor mauris. Donec vestibulum, nulla id ullamcorper ullamcorper, mi neque venenatis ipsum, in ullamcorper nisi lacus at mi. Nunc a aliquet risus, sed lacinia tellus. Aliquam gravida finibus tortor, et auctor elit venenatis ut.</p> <br/> <p>Praesent non velit ac est feugiat eleifend. Morbi eleifend venenatis dolor id facilisis. Ut tincidunt cursus convallis. Donec fringilla eros mi, a scelerisque sapien porttitor a. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In pellentesque enim ut urna efficitur, vitae dictum ligula eleifend.</p>',
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | null>
) {
  const detail = data.filter((post: Data) => post.id === req.query.id);
  if (detail.length === 1) return res.status(200).json(detail[0]);
  return res.status(200).json(null);
}
