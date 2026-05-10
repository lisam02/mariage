import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://agynakftfkquywjedyzn.supabase.co';
const supabaseAnonKey = 'sb_publishable_UBUxlo1G9WdWjCU3hKcsmA_yDF1-z4H';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);