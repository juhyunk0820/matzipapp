import Calendar from '@/components/calendar/Calendar';
import {getMonthYearDetails, getNewMonthYear} from '@/utils';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function CalendarHomeScreen() {
  const currentMonthYear = getMonthYearDetails(new Date());
  const [monthYear, setMonthYear] = useState(currentMonthYear);

  const handleUpdateMonth = (increment: number) => {
    setMonthYear(prev => getNewMonthYear(prev, increment));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Calendar monthYear={monthYear} onChangeMonth={handleUpdateMonth} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CalendarHomeScreen;
