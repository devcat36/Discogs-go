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
  Form, Search
} from "semantic-ui-react"
import {Link} from "react-router-dom"
import ImageUploader from "react-images-upload"
import FormatSpecification from "./FormatSpecification";
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

const emptyRelease = {
  pictures: [],
  artist: [{id: 0, name: ''}],
  title: '',
  label: '',
  catalog: '',
  format: formatOptions[0].key,
  formatSpec: {},
  country: '',
  released: '',
  tracklist: [{
    id: 0,
    pos: '',
    artist: [],
    title: '',
    duration: ''
  }],
  genre: [],
  notes: '',
  submissonNotes: ''
};

function ContributeRelease({mode, initialRelease}) {
  const [release, setRelease] = useState(initialRelease ? initialRelease : emptyRelease);
  const onDrop = picture => {
    setRelease({...release, picture: picture});
  };
  return (
    <div className="contained">
      <Header as="h2">
        {mode === 'edit' ? 'Edit Release' : 'Add Release'}
        <Header.Subheader><Link>Quick Start Guide</Link>&nbsp;&nbsp;&nbsp;<Link>Submsission
          Guidelines</Link></Header.Subheader>
      </Header>
      <Header attached="top" block as="h3">{mode === 'edit' ? 'Edit Release' : 'Add Release'}</Header>
      <Segment attached>
        <ImageUploader
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
        {release.artist.map(selectedArtist =>
          <table style={{marginBottom: '1em'}}>
            <tr>
              <td>
                <Search
                  value={selectedArtist.name}
                  onSearchChange={(event, data) => setRelease({
                    ...release,
                    artist: release.artist.map(artist => artist.id === selectedArtist.id ? {
                      id: artist.id,
                      name: data.value
                    } : artist)
                  })}
                  icon={false}
                  placeholder="Artist"
                />
              </td>
              <td>
                <Icon
                  link
                  size="large"
                  name="cancel"
                  onClick={() => setRelease({
                    ...release,
                    artist: release.artist.length > 1 ? release.artist.filter(e => e.id !== selectedArtist.id) : release.artist
                  })}
                />
              </td>
            </tr>
          </table>
        )}
        <Button
          content="Add Artist"
          icon="plus"
          size="small"
          onClick={() => setRelease({
            ...release,
            artist: [...release.artist, {id: Math.max(...release.artist.map(e => e.id)) + 1, name: ''}]
          })}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Title</Header>
        <Input
          style={{width: '30rem'}}
          placeholder="Title"
          value={release.title}
          onChange={(e, data) => setRelease({...release, title: data.value})}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Label</Header>
        <Input
          style={{width: '20rem'}}
          placeholder="Name"
          value={release.label}
          onChange={(e, data) => setRelease({...release, label: data.label})}
        />
        <Input
          style={{width: '20rem', marginLeft: '5px'}}
          placeholder="Catalog Number"
          value={release.catalog}
          onChange={(e, data) => setRelease({...release, catalog: data.value})}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Format</Header>
        <Dropdown
          selection
          options={formatOptions}
          text={release.format}
          onChange={((event, data) => {
            setRelease({...release, format: (data.value), formatSpec: {}})
          })}
        />
        <Divider/>
        <FormatSpecification
          format={release.format}
          specs={release.formatSpec}
          setSpecs={(e) => setRelease({...release, formatSpec: e})}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Country</Header>
        <Dropdown
          clearable
          search
          selection
          options={countryOptions}
          placeholder="Country"
          style={{width: '30rem'}}
          value={release.country}
          onChange={(e, data) => setRelease({...release, country: data.value})}
        />
      </Segment>
      <Segment attached>
        <Header as="h4">Released</Header>
        <Input
          style={{width: '20rem'}}
          placeholder="Date"
          value={release.released}
          onChange={(e, data) => setRelease({...release, released: data.value})}
        />&nbsp;&nbsp;
        Format: YYYY-MM-DD or YYYY-MM-00 or YYYY
      </Segment>
      <Header>Tracklist</Header>
      <Tracklist
        trackList={release.tracklist}
        setTrackList={(e) => setRelease({...release, tracklist: e})}
      />
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
            value={release.genre}
            onChange={(e, data) => setRelease({...release, genre: data.value})}
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

export default ContributeRelease;