import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  termLabel: {
    textAlign: 'right',
  },
};

export default function TermsAgreementCheckbox() {
  return (
    <Checkbox
      label={
        <label style={styles.termLabel}>
          I agree to&nbsp;
          <Link>Sales & Transaction Policy</Link> and <Link>Seller Terms</Link>
        </label>
      }
    />
  );
}
