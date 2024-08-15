import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW91Ympvcnpzd211ZW5rcXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNTUxNzcsImV4cCI6MjAzNTYzMTE3N30.GJSXRMxFzTD5-5v7ksGPHAphXUX5F2Z0TV5UwajjaI8"
const supabase = createClient(supabaseUrl, supabaseKey);
const names = [];
let defaultOrg = null
const fetchData = async () => {
    const { data, error } = await supabase
    .from('organizations')
    .select('name')
    if (error) {
        console.log('error', error)
    } else {
        data.map((org) => {
            names.push(org.name);
        });
    }
}
fetchData();

const defaultData = async () => {
    const { data, error } = await supabase
    .from('organizations')
    .select()
    .eq('default', true)
    if (error) {
        console.log('error', error)
    } else {
        defaultOrg = data;
    }
}
defaultData();

export { names, defaultOrg };