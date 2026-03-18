import { View, Text } from 'react-native';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

// checked if connected to supabase, it is
export default function TestScreen() {
    const [result, setResult] = useState('Loading...');

    useEffect(() => {
        const test = async () => {
            const { data, error } = await supabase.from('pet_reports').select('*');
            if (error) {
                setResult('Error: ' + error.message);
            } else {
                setResult('Connected! Rows: ' + data.length);
            }
        };
        test();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{result}</Text>
        </View>
    );
}