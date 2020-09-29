import React, {useState} from "react";
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Input,
  Item,
  Segment,
  Table,
  Icon,
  TextArea,
  Form
} from "semantic-ui-react"
import {Link} from "react-router-dom"
import ImageUploader from "react-images-upload"
import ArtistSearchInput from "./ArtistSearchInput";
import FormatSpecification from "./FormatSpecification";
import TracklistRow from "./TracklistRow";
import Tracklist from "./Tracklist";

const formatOptions = [
  {key: 'Vinyl', text: 'Vinyl', value: 'Vinyl'},
  {key: 'Acetate', text: 'Acetate', value: 'Acetate'},
  {key: 'Flexi-disc', text: 'Flexi-disc', value: 'Flexi-disc'},
  {key: 'CD', text: 'CD', value: 'CD'},
  {key: 'DVD', text: 'DVD', value: 'DVD'},
  {key: 'Blu-ray', text: 'Blu-ray', value: 'Blu-ray'},
  {key: 'SACD', text: 'SACD', value: 'SACD'},
];

const countryOptions = [
  {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
  {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
  {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
  {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
  {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
  {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
  {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
  {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
  {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
  {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
  {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
  {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
  {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
  {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
  {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
  {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
  {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
  {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
  {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
  {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
  {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
  {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
  {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
];

const genreOptions = [
  {key: 'Electronic', value: 'Electronic', text: 'Electronic'},
  {key: 'Reggae', value: 'Reggae', text: 'Reggae'},
  {key: 'Non-Music', value: 'Non-Music', text: 'Non-Music'},
  {key: 'Children\'s', value: 'Children\'s', text: 'Children\'s'},
  {key: 'Hip Hop', value: 'Hip Hop', text: 'Hip Hop'},
  {key: 'Latin', value: 'Latin', text: 'Latin'},
  {key: 'Pop', value: 'Pop', text: 'Pop'},
  {key: 'Folk, World, & Country', value: 'Folk, World, & Country', text: 'Folk, World, & Country'},
  {key: 'Jazz', value: 'Jazz', text: 'Jazz'},
  {key: 'Funk / Soul', value: 'Funk / Soul', text: 'Funk / Soul'},
  {key: 'Classical', value: 'Classical', text: 'Classical'},
  {key: 'Stage & Screen', value: 'Stage & Screen', text: 'Stage & Screen'},
  {key: 'Rock', value: 'Rock', text: 'Rock'},
  {key: 'Blues', value: 'Blues', text: 'Blues'},
  {key: 'Brass & Military', value: 'Brass & Military', text: 'Brass & Military'},
];

function AddRelease(props) {
  const [pictures, setPictures] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  const [format, setFormat] = useState(formatOptions[0].key);
  const [traclkist, setTracklist] = useState([{
    id: 0,
    pos: '',
    artist: [],
    title: '',
    duration: ''
  }]);
  return (
    <div className="contained">
      <Header as="h2">
        Add Release
        <Header.Subheader><Link>Quick Start Guide</Link>&nbsp;&nbsp;&nbsp;<Link>Submsission
          Guidelines</Link></Header.Subheader>
      </Header>
      <Header attached="top" block as="h3">Add Release</Header>
      <Segment attached>
        <ImageUploader
          {...props}
          buttonText="Upload Image"
          withIcon={false}
          withLabel={false}
          withPreview
          onChange={onDrop}
          imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
          maxFileSize={5242880}
        />
      </Segment>
      <Segment attached className={'MainArtistSearch'}>
        <Header as="h4">Artist</Header>
        <ArtistSearchInput/>
      </Segment>
      <Segment attached>
        <Header as="h4">Title</Header>
        <Input style={{width: '30rem'}} placeholder="Title"/>
      </Segment>
      <Segment attached>
        <Header as="h4">Label</Header>
        <Input style={{width: '20rem'}} placeholder="Name"/>
        <Input style={{width: '20rem', marginLeft: '5px'}} placeholder="Catalog Number"/>
      </Segment>
      <Segment attached>
        <Header as="h4">Format</Header>
        <Dropdown
          selection
          options={formatOptions}
          text={format}
          onChange={((event, data) => {
            setFormat(data.value)
          })}
        />
        <Divider/>
        <FormatSpecification format={format}/>
      </Segment>
      <Segment attached>
        <Header as="h4">Country</Header>
        <Dropdown
          clearable
          multiple
          search
          selection
          options={countryOptions}
          placeholder="Country"
          style={{width: '30rem'}}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Released</Header>
        <Input style={{width: '20rem'}} placeholder="Date"/>&nbsp;&nbsp;
        Format: YYYY-MM-DD or YYYY-MM-00 or YYYY
      </Segment>
      <Header>Tracklist</Header>
      <Tracklist trackList={traclkist} setTrackList={setTracklist}/>
      <Segment.Group>
        <Segment>
          <Header as="h4">Genres</Header>
          <Dropdown
            clearable
            multiple
            search
            selection
            options={genreOptions}
            placeholder="Genres"
            style={{width: '30rem'}}
          />
        </Segment>
        <Segment>
          <Header as="h4">Notes</Header>
          <Form>
            <TextArea placeholder="Notes"/>
          </Form>
        </Segment>
        <Segment>
          <Header as="h4">Submission Notes</Header>
          <Form>
            <TextArea placeholder="Submission Notes"/>
          </Form>
        </Segment>
        <Segment>
          <Button color="green">Submit</Button>
        </Segment>
      </Segment.Group>
    </div>
  );
}

export default AddRelease;