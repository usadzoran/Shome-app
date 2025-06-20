// إعداد Supabase
const supabaseUrl = 'https://mwowcivulsiizvwvcryo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13b3djaXZ1bHNpaXp2d3vjcryoIiwicm9sRolesIjoiYW5vbiIsImlhdCI6MTc1MDM3MzY0OCwiZXhwIjoxMzk5OTQ5NjQ4fQ.nsPSKBrpBpRraeOs9GstROIbTaPpimZPP2ftsFjk_bM';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// تسجيل المستخدم
async function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const status = document.getElementById('status');

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    status.textContent = '❌ ' + error.message;
    status.style.color = 'red';
  } else {
    status.textContent = '✅ تم التسجيل بنجاح!';
    status.style.color = 'green';
    // بعد التسجيل يمكنك تحويل المستخدم لصفحة أخرى
  }
}
