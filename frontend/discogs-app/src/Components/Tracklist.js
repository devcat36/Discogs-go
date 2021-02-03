import React, {useCallback, useState} from "react";
import {Button, Icon, Table} from "semantic-ui-react";
import TracklistRow from "./TracklistRow";

function Tracklist({trackList, setTrackList}) {
  const addTrack = useCallback(() => {
    setTrackList(trackList.concat([{
      id: [trackList.length ? Math.max(...trackList.map(e => e.id)) + 1 : 0],
      pos: '',
      artist: [],
      title: '',
      duration: ''
    }]));
  }, [trackList, setTrackList]);
  const setTrack = useCallback((id, track) => {
    setTrackList(trackList.map(e => e.id === id ? track : e))
  }, [trackList, setTrackList]);
  const removeTrack = useCallback((id) => {
    trackList.length > 1 && setTrackList(trackList.filter(e => e.id !== id))
  }, [trackList, setTrackList]);
  const moveTrack=useCallback((id,dir)=>{
    let i;
    for(i=0;i<trackList.length;i++){
      if(trackList[i].id===id) break;
    }
    let copy=[...trackList];
    if(dir==='up'){
      if(i){copy[i]=trackList[i-1];copy[i-1]=trackList[i];}
    }else{
      if(i!==trackList.length-1){copy[i]=trackList[i+1];copy[i+1]=trackList[i];}
    }
    console.log(copy);
    setTrackList(copy);
  },[trackList,setTrackList]);
  return (
    <>
      <Table unstackable>
        <Table.Header>
          <Table.HeaderCell style={{width: '1px'}}/>
          <Table.HeaderCell style={{width: '1px'}}>Pos :</Table.HeaderCell>
          <Table.HeaderCell style={{width: '200px'}}>Artist :</Table.HeaderCell>
          <Table.HeaderCell>Title :</Table.HeaderCell>
          <Table.HeaderCell style={{width: '1px'}}>Duration :</Table.HeaderCell>
          <Table.HeaderCell style={{width: '1px'}}/>
        </Table.Header>
        <Table.Body>
          {trackList.map(e => <TracklistRow
            track={e}
            setTrack={(track) => {
              setTrack(e.id, track)
            }}
            onRemoveTrack={removeTrack}
            onMoveTrack={moveTrack}
          />)}
          <Table.Row>
            <Table.Cell colSpan="6" style={{padding: '0.5em 1em'}}>
              <Button floated="right" size="small" onClick={addTrack}>
                <Icon name="plus"/>
                Add Track
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default Tracklist;