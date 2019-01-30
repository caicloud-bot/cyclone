import { Field } from 'formik';
import { Input } from 'antd';
import MakeField from '@/components/public/makeField';
import ValidateSelect from './ValidateSelect';

const InputField = MakeField(Input);

const GitLab = () => {
  return (
    <div>
      <Field
        label={intl.get('integration.form.scm.serverAddress')}
        name="spec.scm.server"
        required
        component={InputField}
      />
      <Field
        label={intl.get('integration.form.scm.verificationMode')}
        name="validateFunc"
        component={ValidateSelect}
      />
    </div>
  );
};

export default GitLab;
