await supabase
  .from('messages')
  .insert([
    {
      name: name,
      message: message
    }
  ]);
