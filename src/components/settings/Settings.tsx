const Settings = ({onClose}: SettingsProps) => {
  return (
      <div className="modal">
          <div>I'm a modal dialog</div>
          <button onClick={onClose}>Close</button>
      </div>
  )
}

type SettingsProps = {
    onClose: () => void;
}

export default Settings;