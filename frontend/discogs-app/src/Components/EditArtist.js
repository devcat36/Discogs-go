import React, {useState} from "react";
import {Header, Segment, Form, TextArea, Input, Button} from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import {Link} from "react-router-dom";

function EditArtist({initialArtist}) {
  const [artist, setArtist] = useState(initialArtist);
  return (
    <div className="contained">
      <Header as="h2">Editing Artist <Link>{artist.name}</Link></Header>
      <Segment>
        <Form>
          <Form.Field>
            <label>Images</label>
            <ImageUploader
              buttonText="Upload Image"
              withIcon={false}
              withLabel={false}
              withPreview
              onChange={(e) => setArtist({...artist, pictures: [...artist.pictures, e]})}
              imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
              maxFileSize={5242880}
            />
          </Form.Field>
          <Form.Field>
            <label>Real Name</label>
            <Input
              value={artist.realName ? artist.realName : ''}
              onChange={(e, data) => setArtist({...artist, realName: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Profile</label>
            <TextArea
              value={artist.profile ? artist.profile : ''}
              onChange={(e, data) => setArtist({...artist, profile: data.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Aliases</label>
            <TextArea
              value={artist.aliases ? artist.aliases : ''}
              onChange={(e, data) => setArtist({...artist, aliases: data.value})}
            />
            <span style={{color: 'grey', fontStyle: 'italic'}}>List one alias per line.</span>
          </Form.Field>
          <Form.Field>
            <label>In Groups</label>
            <TextArea
              value={artist.groups ? artist.groups : ''}
              onChange={(e, data) => setArtist({...artist, groups: data.value})}
            />
            <span style={{color: 'grey', fontStyle: 'italic'}}>List one group per line.</span>
          </Form.Field>
          <Form.Field>
            <label>Submission Notes</label>
            <TextArea
              value={artist.submissionNotes ? artist.submissionNotes : ''}
              onChange={(e, data) => setArtist({...artist, submissionNotes: data.value})}
            />
            <span style={{color: 'grey', fontStyle: 'italic'}}>Be sure to include a full and detailed justification for your submission. You should supply any and all information and links to proofs you have relating to the justification of this submission.</span>
          </Form.Field>
          <Button color="blue" content="Submit Artist Update"/>
        </Form>
      </Segment>
    </div>
  );
}

export default EditArtist