import React, {useCallback, useState} from "react";
import {Button, Icon, Input, Search, Segment, Table} from "semantic-ui-react"

function ArtistAddSegment({onChange, onRemove, value, results, loading}) {
  return (<>
    <Segment className="TracklistArtistSearch" style={{width: 'fit-content', padding: '0'}}>
      <table>
        <td><Search
          onResultSelect={(e, data) => {
            onChange(data.result.title)
          }}
          onSearchChange={(e, data) => {
            onChange(data.value)
          }}
          value={value}
          results={results}
          loading={loading}
        /></td>
        <td><Icon color="grey" name="cancel" onClick={onRemove}/></td>
      </table>
    </Segment>
  </>);
}

function TracklistRow({track, setTrack, onRemoveTrack, onMoveTrack}) {

  const onChangeArtist = useCallback((data, id) => {
    setTrack({...track, artist: track.artist.map(e => id === e.id ? {...e, value: data} : e)});
  }, [track, setTrack]);
  const onRemoveArtist = useCallback((id) => {
    console.log('called');
    setTrack({...track, artist: track.artist.filter(e => e.id !== id)});
  }, [track, setTrack]);
  const onAddArtist = useCallback(() => {
    setTrack({
      ...track,
      artist: track.artist.concat([{
        id: track.artist.length ? Math.max(...track.artist.map(e => e.id)) + 1 : 0,
        value: '',
        loading: false,
        result: []
      }])
    });
  }, [track, setTrack]);

  return (<>
    <Table.Row>
      <Table.Cell>
        <Icon link size="large" name="triangle up" onClick={()=>onMoveTrack(track.id,'up')}/>
        <br/>
        <Icon link size="large" name="triangle down" onClick={()=>onMoveTrack(track.id,'down')}/>
      </Table.Cell>
      <Table.Cell>
        <Input
          style={{width: '5em'}}
          placeholder="#"
          value={track.pos}
          onChange={(e, data) => setTrack({...track, pos: data.value})}
        />
      </Table.Cell>
      <Table.Cell>
        {track.artist.map(e => <ArtistAddSegment
          onChange={(val) => onChangeArtist(val, e.id)}
          onRemove={() => onRemoveArtist(e.id)}
          value={e.value}
          loading={e.loading}
          results={e.results}
        />)}
        <Button onClick={onAddArtist} basic size="mini" style={{width: '6.2em'}}>
          <Icon name="plus"/>
          Add
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Input
          placeholder="Title"
          style={{width: '100%'}}
          value={track.title}
          onChange={(e, data) => setTrack({...track, title: data.value})}/>
      </Table.Cell>
      <Table.Cell>
        <Input
          placeholder="0:00"
          style={{width: '5em'}}
          value={track.duration}
          onChange={(e,data)=>setTrack({...track,duration:data.value})}
        />
      </Table.Cell>
      <Table.Cell>
        <Icon link name="remove" color="grey" onClick={() => onRemoveTrack(track.id)}/>
      </Table.Cell>
    </Table.Row>
  </>);
}

export default TracklistRow;