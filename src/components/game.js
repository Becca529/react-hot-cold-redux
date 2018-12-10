import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export default function Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
        <InfoSection />
      </main>
    </div>
  );
}

// export default class Game extends React.Component {
//     return (
//       <div>
//         <Header
//           onRestartGame={() => this.restartGame()}
//           onGenerateAuralUpdate={() => this.generateAuralUpdate()}
//         />
//         <main role="main">
//           <GuessSection
//             feedback={feedback}
//             guessCount={guessCount}
//             onMakeGuess={guess => this.makeGuess(guess)}
//           />
//           <StatusSection guesses={guesses} 
//             auralStatus={auralStatus}
//           />
//           <InfoSection />
//         </main>
//       </div>
//     );
//   }
// }
