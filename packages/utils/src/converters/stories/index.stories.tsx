import React from 'react';
// import convertCdnUrl from '../convertCdnUrl/convertCdnUrl';
// import convertToDashedName from '../convertToDashedName/convertToDashedName';
// import objectToEncoded from '../objectToEncoded/objectToEncoded';
import { UtilsStory } from 'packages/UtilsStory';
import Highlight from 'react-highlight';

UtilsStory
	.add('converters', () => <div>
    <Highlight language="javascript">
      {`function foo() { return 'bar' }`}
    </Highlight>
</div>);
