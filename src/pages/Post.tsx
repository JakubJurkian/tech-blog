import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import timeAgo from '../util/timeAgo';

function PostPage() {
  const { postId } = useParams();
  console.log(postId);
  const addedXAgo = timeAgo('2023-06-19T11:00:01+0000');
  return (
    <div className="flex justify-center relative bottom-20 xxs:bottom-24 xs:bottom-32 s:bottom-40 sm:bottom-48 md:bottom-56">
      <Post
        author="Jakub Jurkian"
        date={addedXAgo}
        title="New technologies"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
        text="In today's rapidly evolving world, new technologies are continuously emerging and transforming various aspects of our lives. These innovations are revolutionizing industries, enhancing efficiency, and offering new possibilities for human advancement.

        One of the most prominent new technologies is artificial intelligence (AI). AI systems are becoming increasingly sophisticated, enabling machines to perform tasks that were once exclusive to human intelligence. From voice assistants like Siri and Alexa to self-driving cars and advanced data analytics, AI is reshaping how we interact with technology and unlocking unprecedented capabilities.
        
        Another groundbreaking technology is blockchain. Initially known for powering cryptocurrencies like Bitcoin, blockchain has found applications beyond finance. Its decentralized and transparent nature makes it ideal for secure and efficient record-keeping, supply chain management, and even voting systems. Blockchain holds the potential to revolutionize industries by eliminating intermediaries, reducing fraud, and enhancing trust in transactions.
        
        The Internet of Things (IoT) is another transformative technology that connects everyday objects to the internet, enabling them to collect and exchange data. Smart homes, wearable devices, and industrial sensors are just a few examples of IoT applications. With the ability to gather and analyze vast amounts of data, IoT has the potential to enhance productivity, optimize resource allocation, and improve decision-making across industries.
        
        Advancements in virtual reality (VR) and augmented reality (AR) are also reshaping the way we experience the digital world. VR creates immersive, computer-generated environments, while AR overlays digital information onto the real world. These technologies are revolutionizing industries such as gaming, entertainment, healthcare, and education, offering new avenues for interactive experiences and simulations.
        
        The field of biotechnology is witnessing significant advancements, with breakthroughs in gene editing, personalized medicine, and regenerative therapies. CRISPR-Cas9, a revolutionary gene-editing tool, has opened up possibilities for treating genetic disorders and modifying organisms' DNA. Additionally, advancements in 3D printing and nanotechnology are revolutionizing manufacturing processes and enabling the creation of intricate and customized products.
        
        As new technologies continue to emerge, it is crucial to consider their ethical implications and ensure responsible development and usage. While these technologies offer immense potential, addressing issues such as privacy, security, and equitable access is vital for their widespread adoption and positive impact on society.
        
        In conclusion, new technologies are reshaping the world as we know it. From AI and blockchain to IoT, VR/AR, and biotechnology, these innovations hold immense promise for improving various industries and enhancing our lives. Embracing and responsibly harnessing these technologies will be key to unlocking their full potential and shaping a brighter future."
      />
    </div>
  );
}

export default PostPage;
