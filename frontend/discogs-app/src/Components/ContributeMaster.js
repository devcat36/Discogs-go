import React, {useState} from "react";
import {Button, Form, Grid, Header, Input, Segment, TextArea} from "semantic-ui-react";

const emptyMaster = {
  notes: '',
  releases: '',
  keyRelease: '',
  submissionNotes: ''
};

function ContributeMaster({mode, initialMaster}) {
  const [master, setMaster] = useState(initialMaster ? initialMaster : emptyMaster);
  return (
    <div className="contained">
      <Header as="h2" block attached="top">
        {mode === 'edit' ? 'Edit' : 'Create'} Master Release
      </Header>
      <Segment attached style={{overflow:'auto'}}>
        <Grid stackable={false} columns={2}>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <h4>Notes:</h4>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <TextArea
                  value={master.notes}
                  onChange={(e, data) => setMaster({...master, notes: data.value})}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <h4>Releases:</h4>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <TextArea
                  value={master.releases}
                  onChange={(e, data) => setMaster({...master, releases: data.value})}
                />
              </Form>
              List one Release ID per line
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <h4>Key Release:</h4>
            </Grid.Column>
            <Grid.Column>
              <Input
                value={master.keyRelease}
                onChange={(e, data) => setMaster({...master, keyRelease: data.value})}
              /><br/>
              Enter the Release ID of the Key Release
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <h4>Submission Notes:</h4>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <TextArea
                  value={master.submissionNotes}
                  onChange={(e, data) => setMaster({...master, submissionNotes: data.value})}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button
          floated="right"
          color="green"
          size="large"
          content="Submit"
          icon='check'
        />
      </Segment>
    </div>
  );
}

export default ContributeMaster;