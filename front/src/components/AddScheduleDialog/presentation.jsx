import React from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
} from '@material-ui/core';
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/styles';

import * as styles from './style.css';

const spacer = { margin: '4px 0' };

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 },
})(Input);

const AddScheduleDialog = ({
  schedule: {
    form: { title, location, description, date },
    isDialogOpen,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      {/* 閉じるボタン */}
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {/* タイトル */}
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={(e) => setSchedule({ title: e.target.value })}
        />
        {/* 日付 */}
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={11}>
            <DatePicker
              variant="inline"
              format="YYYY/M/D"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
              value={date}
              onChange={(d) => setSchedule({ date: d })}
            />
          </Grid>
        </Grid>
        {/* 場所 */}
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={11}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="場所を追加"
              value={location}
              onChange={(e) => setSchedule({ location: e.target.value })}
            />
          </Grid>
        </Grid>
        {/* 説明 */}
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={11}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="説明を追加"
              value={description}
              onChange={(e) => setSchedule({ description: e.target.value })}
            />
          </Grid>
        </Grid>
      </DialogContent>

      {/* 保存ボタン */}
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={saveSchedule}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
